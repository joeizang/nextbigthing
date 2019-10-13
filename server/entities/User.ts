import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'users' })
export default class User {
  @PrimaryGeneratedColumn('uuid')
  userId!: string

  @Column({ type: 'text' })
  fullName!: string
}
