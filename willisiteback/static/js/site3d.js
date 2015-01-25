$(function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000)
	
	/*camera.position.x = 20;
    camera.position.y = 30;
    camera.position.z = 21;
    camera.lookAt(new THREE.Vector3(0, 0, -30));*/

	camera.position.set( 0, 0, 150 );
	scene.add(camera);


	var renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xFFFFFF, 1.0);
	renderer.setSize(970, 700);

	

	// create the geometry sphere
	var geometry  = new THREE.SphereGeometry(10 * Math.PI, 20, 20)
	// create the material, using a texture of startfield
	var material  = new THREE.MeshBasicMaterial()
	material.map   = THREE.ImageUtils.loadTexture('../static/images/logo-texture2.png')
	material.map.repeat.set(1, 1);
	material.map.wrapS = THREE.RepeatWrapping;
    material.map.wrapT = THREE.RepeatWrapping;
    material.side = THREE.BackSide
	// create the mesh based on geometry and material
	var mesh  = new THREE.Mesh(geometry, material)

	mesh.position.y = 12

	var texto = new THREE.TextGeometry('Coming Soon !!!', {
		font: "00 starmap truetype", // helvetiker, optimer, gentilis, droid sans, droid serif
		weight: "normal", // normal bold
		style: "normal", // normal italic
		size: 15,
		height: 2,
		hover: 10,
		curveSegments: 4,
		bevelThickness: 0.5,
		bevelSize: 1.5,
		bevelSegments : 1,
		bevelEnabled: false,

		material: 0,
		extrudeMaterial: 0
	});

	 var textMaterial = new THREE.MeshBasicMaterial({
        color: 0x001E5C
    });
    var textMesh = new THREE.Mesh(texto, textMaterial);

    textMesh.position.x = -65;
    textMesh.position.y = -45;


	scene.add(mesh);
	scene.add(textMesh);
	var step = 0;

	var current	= { y: textMesh.position.y };

    var update = function(){
    	console.log("estoy aca en el update")
		current.y = textMesh.position.y;
		textMesh.position.y = current.y;
	}

	var position = { y: -45 };
	var target = { y: -35 };
	var tween = new TWEEN.Tween(position).to(target, 2000);

	tween.easing( TWEEN.Easing.Elastic.InOut );

	var backposition = { y: -35 };
	var backtarget = { y: -45 };
	var tweenback = new TWEEN.Tween(backposition).to(backtarget, 2000);
	tweenback.easing( TWEEN.Easing.Elastic.InOut );
	/*tweenback.onUpdate(update);
	tween.onUpdate(update);*/

	
	//tweenback.onUpdate(update);
	tweenback.onUpdate(function(){
	    textMesh.position.y = backposition.y;
	});

	tween.onUpdate(function(){
	    textMesh.position.y = position.y;
	});

	tween.onComplete(function(){

		tweenback.start()
	
	})

	/*tween.chain(tweenback);
	tweenback.chain(tween);*/
	TWEEN.removeAll();

	tween.start();


	
	


	function renderScene(time) {
		
		mesh.rotation.y += 0.005;
		
		TWEEN.update();
		requestAnimationFrame(renderScene);
		renderer.render(scene, camera);
	}


	$("#three-circle").append(renderer.domElement);
	renderScene();
})