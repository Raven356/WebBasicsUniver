CREATE TABLE [dbo].[Info]
(
	[Id] INT NOT NULL PRIMARY KEY identity,
	[Name] varchar(50) not null,
	[Surname] varchar(50) not null,
	[Patronymic] varchar(50),
	[Group] varchar(10) NOT NULL,
	[Phone] varchar(30) NOT NULL,
	[IdCard] varchar(50) unique NOT NULL,
	[Faculity] varchar(50) NOT NULL
)
