import { prisma } from '../common/prisma/prisma'
import { Request, Response } from 'express'
import { BioDto, UpdateBioDto } from '../dto/student_bio.dto'

const getOneStudentBio = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const bio = await prisma.studentBio.findUnique({ where: { id } })

  if (bio === null) return res.status(404).json({ message: 'not found' })

  const studentBioDto: BioDto = {
    id: bio.id,
    birthdate: bio.birthdate,
    highSchoolName: bio.highSchoolName,
  }
  res.status(200).json(studentBioDto)
}

const updateStudentBio = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const newBio: UpdateBioDto = req.body
  const bio = await prisma.studentBio.update({
    where: { id },
    data: {
      birthdate: newBio.birthdate,
      highSchoolName: newBio.highSchoolName,
    }
  })
  res.status(200).json(bio)
}

export {
  getOneStudentBio,
  updateStudentBio
}
