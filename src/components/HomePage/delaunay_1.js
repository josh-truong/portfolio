/*
    Notes on improving performance:
    Vertices:
        [ xpos  ypos
            x1,   y1,   // Vertex 1
            x2,   y2,   // Vertex 2
            ...,
            xn,   yn    // Vertex n
        ]
    Triangles:
        [   // Vertex 1             // Vertex 2             // Vertex 3             // Circum center    // Circum radius
            // xpos     // ypos     // xpos     // ypos     // xpos     // ypos     // x0   // y0       // r
            t1_v1_x1,   t1_v1_y1,   t1_v2_x1,   t1_v2_y1,   t1_v3_x1,   t1_v3_y1,   x0,     y0,         r,                  // Triangle 1
            t2_v1_x1,   t2_v1_y1,   t2_v2_x1,   t2_v2_y1,   t2_v3_x1,   t2_v3_y1,   x0,     y0,         r,                  // Triangle 2
            ...,
            tn_v1_x1,   tn_v1_y1,   tn_v2_x1,   tn_v2_y1,   tn_v3_x1,   tn_v3_y1,   x0,     y0,         r                   // Triangle n
    ]
    Use hash map for something
*/




export var GenVerticesSet = (n) => {
    var max_width = window.innerWidth/2 + 300;
    var max_height = window.innerHeight/2 + 100;
    var min_width = 0 + 900;
    var min_height = 0 + 400;
    var vertices = [];

    for(var i = 0; i < n; i++) {
        
        vertices.push([Math.floor(Math.random() * (max_width - min_width) + min_width),
                       Math.floor(Math.random() * (max_height - min_height) + min_height)]);
    }
    return vertices;
};

export var SuperTriangle = (vertices) => {
    var xmin = Number.POSITIVE_INFINITY,
        ymin = Number.POSITIVE_INFINITY,
        xmax = Number.NEGATIVE_INFINITY,
        ymax = Number.NEGATIVE_INFINITY,
        dx, dy, dmax, xmid, ymid;

    let n = vertices.length;
    for( let i = 0; i < n; i++) {
        if(vertices[i][0] < xmin) xmin = vertices[i][0];
        if(vertices[i][0] > xmax) xmax = vertices[i][0];
        if(vertices[i][1] < ymin) ymin = vertices[i][1];
        if(vertices[i][1] > ymax) ymax = vertices[i][1];
    }

    dx = xmax - xmin;
    dy = ymax - ymin;
    dmax = Math.max(dx, dy);
    xmid = xmin + dx * 0.5;
    ymid = ymin + dy * 0.5;
    
    return [
        [ xmid - 2 * dmax, ymid -      dmax ],
        [ xmid           , ymid + 2  * dmax ],
        [ xmid + 2 * dmax, ymid -      dmax ]
    ];
};

export var CircumCircle = (triangleVertices) => {
    var vertices = triangleVertices;

    if(triangleVertices.length !== 3) {
        throw new Error("CircumCircle func requires a set of 3 vertices from a triangle")
    };

    var A = vertices[0],
        B = vertices[1],
        C = vertices[2],
        mid_AB, mid_BC, m_AB, m_BC, norm_AB, norm_BC, x0, y0, r;

        // Find the mid points of 2 edges: Edge AB and Edge BC
        mid_AB = [(A[0] + B[0])*0.5, (A[1] + B[1])*0.5]; // [(x1 + x2) / 2, (y1 + y2) / 2]
        mid_BC = [(B[0] + C[0])*0.5, (B[1] + C[1])*0.5]; // [(x2 + x3) / 2, (y2 + y3) / 2]

        // Calcuate the slope of edge AB and BC
        m_AB = (B[1] - A[1]) / (B[0] - A[0]); // (y2 - y1) / (x2 - x1)
        m_BC = (C[1] - B[1]) / (C[0] - B[0]); // (y3 - y2) / (x3 - x2)

        // Calculate the normal slope of edge AB and BC
        norm_AB = -1 / m_AB;
        norm_BC = -1 / m_BC;

        // Find the point of intersection, what a throw back to algebra
        x0 = (((norm_AB*mid_AB[0]) - mid_AB[1]) - ((norm_BC*mid_BC[0]) - mid_BC[1])) / (norm_AB-norm_BC);
        y0 = norm_AB*(x0 - mid_AB[0]) + mid_AB[1];

        // Find the circumradius: Distance formula from circumcenter to triangle vertex
        r = Math.sqrt((A[0] - x0)**2 + (A[1] - y0)**2);

    return { x0:x0, y0:y0, r:r}
};



export var BowyerWatson = (vertices) => {

    var n = vertices.length;
    if (n < 3) throw new Error("At least 3 vertices is needed.");

    var polygon = [];
    var triangulation = [SuperTriangle(vertices)];
    // Add all points one at a time to the triangulation
    for ( let p_idx = n; p_idx--; ) {
        var badTriangles = [];
        // Find all triangles that are invalid due to point insertion
        for ( let i = triangulation.length; i--; ) {
            var circle = CircumCircle(triangulation[i]);
            // Determine if the point is within the circumcircle circumradius using distance formula
            if ( Math.sqrt( (circle.x0 - vertices[p_idx][0])**2 + (circle.y0 - vertices[p_idx][1])**2 ) <= circle.r ) {
                badTriangles.push(i);
            }
        }
        
        // Find the boundary of the polygon hole
        var polygon = [];
        for ( var i = badTriangles.length; i--; ) {
            
        }
    }
}