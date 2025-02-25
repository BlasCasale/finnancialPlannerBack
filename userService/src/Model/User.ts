import { Sequelize, DataTypes, Model } from 'sequelize'

export const UserFunc = (db: Sequelize) => {
  return db.define<Model>('User', {
    id: {
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID
    },
    username: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    mail: {
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      },
      type: DataTypes.STRING(40)
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(90)
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    timestamps: false
  })
}
