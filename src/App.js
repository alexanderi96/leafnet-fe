import React, { useEffect } from 'react';
import ForceGraph3D from '3d-force-graph';

function App() {
  useEffect(() => {
    // Dati di esempio
    const data = {
      nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
      links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
    };

    // Inizializzazione del grafico
    const Graph = ForceGraph3D()
      (document.getElementById('3d-graph'))
      .graphData(data)
      .nodeLabel('id')
      .linkDirectionalArrowLength(3.5)
      .linkDirectionalArrowRelPos(1);
  }, []);

  return (
    <div id="3d-graph" style={{ width: '100%', height: '600px' }}></div>
  );
}

export default App;