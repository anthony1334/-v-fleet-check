import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'

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
}