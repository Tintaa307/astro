"use client"

import Title from "../shared/Title"
// import { useEffect, useRef } from "react"
// import * as THREE from "three"
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
// import { AnimationMixer } from "three"
// import { OrbitControls } from "three/addons/controls/OrbitControls.js"

const About = () => {
  // const canvasRef = useRef<HTMLDivElement>(null)
  // const scene = new THREE.Scene()
  // let light
  // scene.background = new THREE.Color(0x13131a)
  // const camera = new THREE.PerspectiveCamera(
  //   75,
  //   window.innerWidth / window.innerHeight,
  //   0.1,
  //   1000
  // )
  // const renderer = new THREE.WebGLRenderer({ antialias: true })
  // const controls = new OrbitControls(camera, renderer.domElement)

  // useEffect(() => {
  //   const canvas = canvasRef.current
  //   renderer.setSize(window.innerWidth, window.innerHeight)
  //   canvas?.appendChild(renderer.domElement)
  //   camera.position.z = 0.45
  //   camera.position.x = 0.4
  //   camera.position.y = 0.1
  //   controls.update()
  //   scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000)
  //   light = new THREE.HemisphereLight(0xffffff, 0x444444)
  //   light.position.set(0, 200, 0)
  //   scene.add(light)
  //   light = new THREE.DirectionalLight(0xffffff)
  //   light.position.set(0, 200, 100)
  //   light.castShadow = true
  //   light.shadow.camera.top = 180
  //   light.shadow.camera.bottom = -100
  //   light.shadow.camera.left = -120
  //   light.shadow.camera.right = 120
  //   scene.add(light)

  //   const object = new GLTFLoader()
  //   let mixer: AnimationMixer
  //   object.load(
  //     "/3D-model/scene.gltf",
  //     function (gltf) {
  //       const modelGltf = gltf.scene
  //       modelGltf.scale.set(0.1, 0.1, 0.1)
  //       scene.add(modelGltf)
  //       mixer = new THREE.AnimationMixer(modelGltf)
  //       const clips = gltf.animations
  //       const action = mixer.clipAction(clips[0])
  //       action.play()
  //     },
  //     function (onProgress) {
  //       console.log(onProgress)
  //     },
  //     function (error) {
  //       console.log(error)
  //     }
  //   )
  //   const clock = new THREE.Clock()
  //   const animate = () => {
  //     if (mixer) {
  //       mixer.update(clock.getDelta())
  //     }
  //     requestAnimationFrame(animate)
  //     renderer.render(scene, camera)
  //   }
  //   animate()
  // }, [])
  return (
    <section className="w-full h-full flex items-center justify-center flex-col mb-4">
      <Title title="ABOUT ME" />
      <div className="w-full h-full flex items-center justify-center flex-row">
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="w-full flex items-start justify-start flex-col gap-3">
            <h2 className="text-white-0 font-medium text-3xl ml-4">
              Hi there 👋
            </h2>
            <p className="w-full ml-4 text-gray-900 font-normal">
              Im Valentin Gonzalez most people call me Tintaa,{" "}
              <span className="">fullstack developer</span> based on Argentina
              with 2 years of experience in the web development.
            </p>
          </div>
        </div>
        <div className="w-full h-1/2 flex items-center justify-center bg-black-900 overflow-hidden">
          {/* <div ref={canvasRef}></div> */}
        </div>
      </div>
    </section>
  )
}

export default About
