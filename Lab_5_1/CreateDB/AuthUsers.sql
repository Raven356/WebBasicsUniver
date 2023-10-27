CREATE TABLE [dbo].[AuthTable]
(
	[Id] INT NOT NULL PRIMARY KEY identity, 
    [Login] VARCHAR(50) unique NOT NULL,
	[Password] varchar(50) Not Null, 
	[Role] int not null,
    [IdInfo] INT NULL
	constraint FK_IDINFO_INFO FOREIGN KEY (IdInfo) references Info(Id) on delete cascade

)
