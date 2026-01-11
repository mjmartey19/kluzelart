/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure Turbopack uses this folder as the workspace root so it doesn't
  // mistakenly pick a parent directory that contains another lockfile.
  turbopack: {
    // Must be an absolute path. We set it to this project's directory.
    root: path.resolve(__dirname),
  },
}

export default nextConfig
