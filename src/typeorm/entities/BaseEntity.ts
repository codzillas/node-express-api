import { Column } from "typeorm";

export class BaseEntity {
  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;
  
  @Column("timestamp without time zone", {
    name: "modified_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedAt: Date;
}
