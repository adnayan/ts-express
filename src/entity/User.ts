import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	ManyToOne,
	BeforeInsert,
	JoinColumn,
	BaseEntity,
} from 'typeorm';
import bcrypt from 'bcryptjs';
import { Role } from './Role';

export interface IUser {
	firstName: string;
	lastName: string;
	isActive: boolean;
	email: string;
	password: string;
	image: string;
	roleId: number;
}

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	firstName: string;

	@Column({ nullable: false })
	lastName: string;

	@Column({ select: false, nullable: false })
	isActive: boolean;

	@Column({ nullable: false })
	email: string;

	@Column({ select: false, nullable: false })
	password: string;

	@Column({ nullable: false })
	image: string;

	@CreateDateColumn({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' })
	createdAt: string;

	@UpdateDateColumn({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' })
	updatedAt: string;

	@DeleteDateColumn({ type: 'timestamp' })
	deletedAt: string;

	@Column()
	roleId: number;
	@ManyToOne(() => Role, (role) => role.users)
	@JoinColumn({ name: 'roleId' })
	role: Role;

	@BeforeInsert()
	async setPassword(password: string) {
		const salt = await bcrypt.genSalt();
		this.password = await bcrypt.hash(password || this.password, salt);
	}
}
