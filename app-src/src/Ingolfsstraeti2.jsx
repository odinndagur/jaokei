/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ingolfsstraeti2.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/jaokei/ingolfsstraeti2-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.kanina.geometry} material={materials.Floor_material} position={[11.71, 2.3, -1.4]} rotation={[0, 0.87, 0]} scale={0.78} />
      <mesh geometry={nodes.Floor088.geometry} material={materials.Floor_material} />
      <mesh geometry={nodes.Floor088_1.geometry} material={materials.Column_material} />
      <mesh geometry={nodes.Floor088_2.geometry} material={materials.Column_material} />
      <mesh geometry={nodes.Floor088_3.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Floor088_4.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Floor088_5.geometry} material={materials.Column_material} />
      <mesh geometry={nodes.Floor088_6.geometry} material={materials.Column_material} />
      <mesh geometry={nodes.Floor088_7.geometry} material={materials.Floor_material} />
      <mesh geometry={nodes.Floor088_8.geometry} material={materials.Column_material} />
      <mesh geometry={nodes.Floor088_9.geometry} material={materials.Column_material} />
      <mesh geometry={nodes.Floor088_10.geometry} material={materials.Column_material} />
      <mesh geometry={nodes.Floor088_11.geometry} material={materials.Column_material} />
      <mesh geometry={nodes.Floor088_12.geometry} material={materials.Column_material} />
      <mesh geometry={nodes.Floor088_13.geometry} material={materials.Column_material} />
      <mesh geometry={nodes.Floor088_14.geometry} material={materials.Column_material} />
      <mesh geometry={nodes.Floor088_15.geometry} material={materials.Column_material} />
      <mesh geometry={nodes.Floor088_16.geometry} material={materials.Column_material} />
      <mesh geometry={nodes.Floor088_17.geometry} material={materials.Column_material} />
    </group>
  )
}

useGLTF.preload('/ingolfsstraeti2-transformed.glb')
