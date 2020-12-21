import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Company } from './company'

@Entity('user')
export class User {
    
    @PrimaryGeneratedColumn()
    public id: number

    @Column({
        type:'varchar',
        length: 150,
        nullable: false,
        unique: true
    })
    public userLog: string

    @Column({
        type:'varchar',
        length: 150,
        nullable: false,
        unique: true
    })
    public passwordLog: string

    @ManyToOne (()=>Company, company=>company.users,{eager:true})
    public company: Company
}