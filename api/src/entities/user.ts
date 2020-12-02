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
    public name: string

    @Column({
        type:'number',
        length: 150,
        nullable: false,
        unique: true
    })
    public licenceNumber: number

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

    @ManyToOne (()=>Company)
    public CompanyId: Company
}