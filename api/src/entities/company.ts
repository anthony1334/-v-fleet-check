import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { User } from './user'

@Entity('company')
export class Company {
    
    @PrimaryGeneratedColumn()
    public id: number

    @Column({
        type:'varchar',
        length: 150,
        nullable: false,
        unique: true
    })
    public name: string

    @OneToMany (()=>User, user=>user.company)
    public users: User[]
}