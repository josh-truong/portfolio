import React, { useEffect, useRef } from 'react';
import { useStyles } from './styles';
import Delaunay from './delaunay';


const HomePage = () => {
    const classes = useStyles();
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const requestRef = useRef(null);
    const previousTimeRef = useRef(null);


    var n;
    (window.innerWidth < 640) ? n = 25 : n = 50;
    var max_velocity = 0.08;
    var min_velocity = 0.05;
    var vertices = [];
    var velocity = [];
    var triangles = [];

    var minX, minY, maxX, maxY, prevWidth = window.innerWidth;

    vertices.push([0,0]);
    vertices.push([window.innerWidth/2,0]);
    vertices.push([window.innerWidth,0]);
    vertices.push([0,window.innerHeight/2]);
    vertices.push([0,window.innerHeight]);
    vertices.push([window.innerWidth/2,window.innerHeight]);
    vertices.push([window.innerWidth,window.innerHeight]);
    vertices.push([window.innerWidth,window.innerHeight/2]);

    for ( let i = vertices.length; i--; ) {
        velocity.push([0, 0]);
    }

    for ( let i = n - vertices.length; i--; ) {
        vertices.push([Math.floor(Math.random() * window.innerWidth),
                       Math.floor(Math.random() * window.innerHeight)]);

        var rotation = Math.random() * 360;
        var speed = Math.random() * (max_velocity - min_velocity) + min_velocity;
        velocity.push([speed * Math.cos(rotation), speed * Math.sin(rotation)]);
    }

    const updateVector = (vertices, velocity, ts) => {
        for ( let i = vertices.length; i--; ) {
            if ( minX > vertices[i][0] || vertices[i][0] > maxX ) {
                velocity[i][0] *= -1;
            }

            if ( minY > vertices[i][1] || vertices[i][1] > maxY ) {
                velocity[i][1] *= -1;
            }

            vertices[i][0] += velocity[i][0] * ts;
            vertices[i][1] += velocity[i][1] * ts;
        }
    };

    const lerp = (color1, color2, ts) => {
        if ( ts < 0 && ts > 1.0) throw new Error('Param ts must be a value between 0 and 1!');
        var r = color1[0] * (1 - ts) + color2[0] * ts;
        var g = color1[1] * (1 - ts) + color2[1] * ts;
        var b = color1[2] * (1 - ts) + color2[2] * ts;
        return [Math.floor(r), Math.floor(g), Math.floor(b)];
    }


    const draw = (vertices) => {
        const ctx = contextRef.current;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.strokeStyle = '#fff';
        
        ctx.lineWidth = 0.3;

        for ( let i = 0; i < triangles.length; i+=3 ) {
            ctx.beginPath();
            ctx.moveTo(vertices[triangles[i    ]][0], vertices[triangles[i    ]][1]);
            ctx.lineTo(vertices[triangles[i + 1]][0], vertices[triangles[i + 1]][1]);
            ctx.lineTo(vertices[triangles[i + 2]][0], vertices[triangles[i + 2]][1]);
            ctx.closePath();
            ctx.stroke();

            var ts = (vertices[triangles[i]][1] + vertices[triangles[i+1]][1] + vertices[triangles[i+2]][1]);
                ts /= (3*255);
            const light_cyan = [4, 194, 201];
            const dark_cyan = [0, 161, 167];
            var lerp_color = lerp(light_cyan, dark_cyan, ts);
            ctx.fillStyle = `rgba(${lerp_color[0]}, ${lerp_color[1]}, ${lerp_color[2]}, 1.0)`;
            ctx.fill();

            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(vertices[triangles[i    ]][0], vertices[triangles[i    ]][1], 3, 0, 2*Math.PI, 0);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(vertices[triangles[i + 1]][0], vertices[triangles[i + 1]][1], 3, 0, 2*Math.PI, 0);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(vertices[triangles[i + 2]][0], vertices[triangles[i + 2]][1], 3, 0, 2*Math.PI, 0);
            ctx.fill();
        }
    };

    

    const animate = (time) => {
        if(previousTimeRef.current !== undefined) {
            minX = 0;
            minY = 0;
            maxX = window.innerWidth;
            maxY = window.innerHeight;
            if ( maxX !== prevWidth ) {
                vertices[1] = [maxX/2,0];
                vertices[2] = [maxX,0];
                vertices[5] = [maxX/2,maxY];
                vertices[6] = [maxX,maxY];
                vertices[7] = [maxX, maxY/2];
            }

            const canvas = canvasRef.current;
            canvas.width = maxX;
            canvas.height = maxY;
            
            const context = canvas.getContext('2d');
            contextRef.current = context;

            triangles = Delaunay.triangulate(vertices);
            draw(vertices);
            updateVector(vertices, velocity, 50);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(requestRef.current)
        }
    }, []);

    return (
        <div id="home">
            {/* Low Poly background? */}
            <div className={classes.root}>
                <canvas ref={canvasRef} style={{position:"absolute"}} />
                <div className={classes.tagbox}>
                    <h1 className={classes.text} style={{fontSize:"30px"}}>Joshua Truong</h1>
                    <h3 className={classes.text} style={{fontSize:"15px"}}>Software Engineer</h3>
                </div>
            </div>
        </div>
    )
}

export default HomePage
