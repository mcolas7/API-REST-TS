import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router()

/**
 * It takes a string, splits it on the period, and returns the first item in the resulting array
 * @param {string} fileName - string
 * @returns The file name without the extension.
 */
const cleanFileName = (fileName: string): string | undefined => {
  return fileName.split('.').shift()
}

/* Reading the directory and filtering out the files that are not index.ts. */
// eslint-disable-next-line array-callback-return
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName)

  if (cleanName !== 'index' && cleanName !== undefined) {
    void import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`/${cleanName}`)
      router.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})

export { router }
