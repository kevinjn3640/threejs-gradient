import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { MovingGraadientElement } from "../components/moving-gradient-elements"
import { Layout } from "../components/layout"

export default function Scene() {
  return (
    <Layout>
      <div
        style={{
          background: "pink",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Canvas>
          {/* addMeshElements */}
          <MovingGraadientElement />
          {/* addLights */}
          <hemisphereLight args={[0xffffff, 0x000000, 1.4]} />
          <pointLight args={[0xffffff, 0.5]} />
          {/* @ts-ignore */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Canvas>
      </div>
    </Layout>
  )
}

Scene.defaultProps = {}
