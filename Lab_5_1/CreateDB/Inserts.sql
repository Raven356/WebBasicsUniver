INSERT INTO [dbo].[Info] ([Name], [Surname], [Patronymic], [Group], [Phone], [IdCard], [Faculity])
VALUES 
  ('John', 'Doe', 'Smith', 'A101', '555-555-5555', 'ID1234', 'Engineering'),
  ('Jane', 'Doe', 'Smith', 'A102', '555-555-5555', 'ID5678', 'Science'),
  ('Bob', 'Johnson', NULL, 'B101', '555-555-5555', 'ID9101', 'Arts'),
  ('Alice', 'Johnson', NULL, 'B102', '555-555-5555', 'ID1121', 'Business'),
  ('Mike', 'Smith', NULL, 'C101', '555-555-5555', 'ID3141', 'Law');

go
-- Insert into AuthTable table
INSERT INTO [dbo].[AuthTable] ([Login], [Password], [Role], [IdInfo])
VALUES 
  ('super_admin', 'super', 0, null),
  ('john_doe', 'password123', 1, 1),
  ('jane_doe', 'password123', 2, 2),
  ('bob_johnson', 'password123', 2, 3),
  ('alice_johnson', 'password123', 2, 4),
  ('mike_smith', 'password123', 1, 5);
