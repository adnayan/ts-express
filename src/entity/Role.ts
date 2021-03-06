import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	OneToMany,
	BaseEntity,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Role extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	title: string;

	@Column({ nullable: false })
	slug: string;

	@CreateDateColumn({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' })
	createdAt: string;

	@UpdateDateColumn({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' })
	updatedAt: string;

	@DeleteDateColumn({ type: 'timestamp' })
	deletedAt: string;
	users: any;

	@OneToMany((type) => User, (user) => user.role)
	user: User[];
}
