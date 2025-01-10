import React from 'react'
import styles from "./styles.module.css"
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "About page",
  description: "About this page"
}
export default function About() {
  return (
    <main className={styles.main}>
        <h1>About</h1>
    </main>
  )
}
