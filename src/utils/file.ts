/**
 * 判断某个文件夹是否存在
 * @param path
 * @returns {boolean}
 */
export function isDirectory(path: string): boolean {
  try {
    const stat = fs.statSync(path)
    return stat.isDirectory()
  } catch (error) {
    return false
  }
}

import fs from 'fs'
import path from 'path'
/**
 * 获取某个目录下所有文件的默认导出
 * @param filePath 需要遍历的文件路径
 */
export const getAllFilesExport = async (filePath: string, callback: any) => {
  // 根据文件路径读取文件, 返回一个文件列表
  const files: string[] = fs.readdirSync(filePath)
  // 遍历读取到的文件列表
  files.forEach(async (fileName) => {
    // path.join得到当前文件的绝对路径
    const absFilePath: string = path.join(filePath, fileName)
    const stats: fs.Stats = fs.statSync(absFilePath)
    const isFile = stats.isFile() // 是否为文件
    const isDir = stats.isDirectory() // 是否为文件夹
    if (isFile) {
      const file = await import(absFilePath)
      callback(file.default)
    }
    if (isDir) {
      getAllFilesExport(absFilePath, callback) // 递归, 如果是文件夹, 就继续遍历该文件夹里面的文件；
    }
  })
}
