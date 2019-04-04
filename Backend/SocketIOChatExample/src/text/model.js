export default (sequelize, DataType) => {
  const Text = sequelize.define('texts', {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    content: {
      type: DataType.TEXT
    },
    createdAt: DataType.DATE,
    updatedAt: DataType.DATE,
    deletedAt: DataType.DATE
  });
  return Text;
}