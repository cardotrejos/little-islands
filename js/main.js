let scene,
    camera,
    renderer,
    geometry,
    group;

init();
render();

function init() {

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 20;

  geometry = new THREE.BoxGeometry( 1, 1, 1 );   

  // LIGHTS

  let light = new THREE.DirectionalLight( 0xEEFFD3, 1 );
  light.position.set( 0, 0, 1 );
  scene.add( light );

  let light1 = new THREE.DirectionalLight( 0xFF0000, 0.4 );
  light1.position.set( 1, 0, 0 );
  scene.add( light1 );

  let light2 = new THREE.DirectionalLight( 0xFFFFFF, 0.2 );
  light2.position.set( 0, 1, 0 );
  scene.add( light2 );
  
  // SEA

  let seaMaterial = new THREE.MeshLambertMaterial( { color: 0x94EBF0 } );
  let sea = new THREE.Mesh( geometry, seaMaterial );
  sea.position.set( 0, -5, 0 );
  sea.scale.set( 20, 7 , 20 );

  // GROUND

  let leaveDarkDarkMaterial = new THREE.MeshLambertMaterial( { color: 0x71B356 } );
  let ground = new THREE.Mesh( geometry, leaveDarkDarkMaterial );
  ground.position.set( 0, -1, 0 );
  ground.scale.set( 15, 1 , 15 );

  // TREE1

  let leaveDarkMaterial = new THREE.MeshLambertMaterial( { color: 0x91E56E } );
  let leaveLightMaterial = new THREE.MeshLambertMaterial( { color: 0xA2FF7A } );
  let stemMaterial = new THREE.MeshLambertMaterial( { color: 0x7D5A4F } );

  let stem = new THREE.Mesh( geometry, stemMaterial );
  stem.position.set( 5, 0, 5 );
  stem.scale.set( 0.3, 1.5, 0.3 );

  let squareLeave01 = new THREE.Mesh( geometry, leaveDarkMaterial );
  squareLeave01.position.set( 5.5, 1.6, 5.5 );
  squareLeave01.scale.set( 0.8, 0.8, 0.8 );

  let squareLeave02 = new THREE.Mesh( geometry, leaveDarkMaterial );
  squareLeave02.position.set( 5.4, 1.3, 4.6 );
  squareLeave02.scale.set( 0.7, 0.7, 0.7 );

  let squareLeave03 = new THREE.Mesh( geometry, leaveDarkMaterial );
  squareLeave03.position.set( 5.4, 1.7, 5.5 );
  squareLeave03.scale.set( 0.7, 0.7, 0.7 );

  let leaveDark = new THREE.Mesh( geometry, leaveDarkMaterial );
  leaveDark.position.set( 5, 1.2, 5 );
  leaveDark.scale.set( 1, 2, 1 );

  let leaveLight = new THREE.Mesh( geometry, leaveLightMaterial );
  leaveLight.position.set( 5, 1.2, 5 );
  leaveLight.scale.set( 1.1, 0.5, 1.1 );

  let tree1 = new THREE.Group();
  tree1.add( leaveDark );
  tree1.add( leaveLight );
  tree1.add( squareLeave01 );
  tree1.add( squareLeave02 );
  tree1.add( squareLeave03 );
  tree1.add( stem );

  tree1.rotation.y = 1;
  tree1.rotation.x = 0.5;

  // TREE2

  let leaveDarkMaterial2 = new THREE.MeshLambertMaterial( { color: 0x91E56E } );
  let leaveLightMaterial2 = new THREE.MeshLambertMaterial( { color: 0xA2FF7A } );
  let stemMaterial2 = new THREE.MeshLambertMaterial( { color: 0x7D5A4F } );

  let stem2 = new THREE.Mesh( geometry, stemMaterial2 );
  stem2.position.set(-5, 0, -5 );
  stem2.scale.set( 0.3, 1.5, 0.3 );

  let squareLeave012 = new THREE.Mesh( geometry, leaveDarkMaterial2 );
  squareLeave012.position.set( -5.5, 1.6, -5.5 );
  squareLeave012.scale.set( 0.8, 0.8, 0.8 );

  let squareLeave022 = new THREE.Mesh( geometry, leaveDarkMaterial2 );
  squareLeave022.position.set( -5.4, 1.3, -5.4 );
  squareLeave022.scale.set( 0.7, 0.7, 0.7 );

  let squareLeave032 = new THREE.Mesh( geometry, leaveDarkMaterial2 );
  squareLeave032.position.set( -5.4, 1.7, -5.0 );
  squareLeave032.scale.set( 0.7, 0.7, 0.7 );

  let leaveDark2 = new THREE.Mesh( geometry, leaveDarkMaterial2 );
  leaveDark2.position.set( -5, 1.2, -5 );
  leaveDark2.scale.set( 1, 2, 1 );

  let leaveLight2 = new THREE.Mesh( geometry, leaveLightMaterial2 );
  leaveLight2.position.set( -5, 1.2, -5 );
  leaveLight2.scale.set( 1.1, 0.5, 1.1 );

  let tree2 = new THREE.Group();
  tree2.add( leaveDark2 );
  tree2.add( leaveLight2 );
  tree2.add( squareLeave012 );
  tree2.add( squareLeave022 );
  tree2.add( squareLeave032 );
  tree2.add( stem2 );

  tree2.rotation.y = 1;
  tree2.rotation.x = 0.5;

  // ISLAND GROUP

  let island = new THREE.Group();
  island.add( sea );
  island.add( ground );

  island.rotation.y = 1;
  island.rotation.x = 0.5;

  scene.add( island, tree1, tree2 );





  renderer =  new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );

}

function render() {

  requestAnimationFrame( render );
  renderer.render( scene, camera );

}