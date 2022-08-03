-- Task 1 : Create 2 tables todo and todo_expiry, connect them by constraint

CREATE TABLE todo(
	todo_id serial PRIMARY KEY,
  	title VARCHAR ( 50 ) NOT NULL,
  	created_date TIMESTAMP NOT NULL,
    completed BOOLEAN DEFAULT false,
);

CREATE TABLE todo_expiry (
    todo_expiry_id int NOT NULL,
    expiry_datetime TIMESTAMP NOT NULL,
    todo_id int,
    PRIMARY KEY (todo_expiry_id),
    CONSTRAINT FK_PersonOrder FOREIGN KEY (todo_id)
    REFERENCES todo(todo_id)
);
---------------------------------------------------------------------------------------------------------

-- Task 2:
-- 2a: Load any hardcoded 50 todos in the database. (but time was limited so i did only 7)

INSERT INTO todo VALUES (1, 'Mark attendance', '1972-01-01 00:00:01', false);
INSERT INTO todo VALUES (2, 'Mark 2nd attendance', '1972-01-01 00:00:01', false);
INSERT INTO todo VALUES (3, 'Do task 2', '1972-01-01 00:00:01', false);
INSERT INTO todo VALUES (4, 'Practice PostgreSQL', '1972-01-01 00:00:01', false);
INSERT INTO todo VALUES (5, 'Call Moti', '1972-01-01 00:00:01', false);
INSERT INTO todo VALUES (6, 'Do Daily Chores', '1972-01-01 00:00:01', false);
INSERT INTO todo VALUES (7, 'Exercise', '1972-01-01 00:00:01', false);

-- 2b: Write a query to get all todos.
SELECT todo_id, title, created_date, completed FROM todo;

-- 2c: Write a query to get all non-completed todos.
SELECT title from todo WHERE completed IS false;

-- 2d: Write a query to get all todos for today's date.
SELECT title from todo WHERE created_date = '2022-08-03';

----------------------------------------------------------------------------------------------------------------
-- Task3
-- 3a: Create a function to insert a single todo
CREATE [ OR REPLACE ] FUNCTION insert_todo (id INT, title VARCHAR(50), created_date TIMESTAMP, completed BOOLEAN) 
    LANGUAGE plpgsql
    BEGIN
        INSERT INTO todo VALUES (id ,title, created_date, completed);
    END;


-- 3b: Create a function to insert list of todos (input should be single JSON)
CREATE [ OR REPLACE ] FUNCTION insert_bulk (file_path VARCHAR(100))
    LANGUAGE plpgsql
    BEGIN
        Declare @JSON varchar(max)
        SELECT @JSON=BulkColumn
        FROM OPENROWSET (BULK file_path, SINGLE_CLOB) import
        SELECT * FROM OPENJSON (@JSON)
        WITH  (
            [todo_id] INT,  
            [title] VARCHAR(50),  
            [created_date] TIMESTAMP,
            [completed] BOOLEAN);
    END;
-- 3c: Create a function to delete a todo (single id input)
CREATE [ OR REPLACE ] FUNCTION delete_todo_by_id (id INT)
    LANGUAGE plpgsql
    BEGIN
        DELETE FROM todo WHERE todo_id=id;
    END;


-- 3d: Create a function to fetch all todos (output in a table form)
CREATE [ OR REPLACE ] FUNCTION get_all_todos (id INT)
    LANGUAGE plpgsql
    BEGIN
        SELECT todo_id, title, created_date, completed FROM todo;
    END;
-- 3e: Create a function to fetch all non-completed todos (output in JSON form)
CREATE [ OR REPLACE ] FUNCTION get_incomplete_todo_json (id INT)
    LANGUAGE plpgsql
    BEGIN
        SELECT todo_id, title, created_date, completed from todo WHERE completed IS false FOR JSON AUTO;
    END;

-- 3f: Create a function to fetch all todos for today's date. (output in any efficient form)
CREATE [ OR REPLACE ] FUNCTION get_today_todo (id INT)
    LANGUAGE plpgsql
    BEGIN
        SELECT todo_id, title, created_date, completed from todo as t WHERE created_date = '2022-08-03' ORDER BY t.title ;
    END;
-- 3g: Create a function to update text of a todo (input should be single JSON)
CREATE [ OR REPLACE ] FUNCTION update_todo (jsonData JSON)
    LANGUAGE plpgsql
    BEGIN
        JSON_VALUE(jsonData, '$.todo.id') AS id,
        JSON_VALUE(jsonData, '$.todo.title') AS title,
        UPDATE todo SET title = title WHERE todo_id = id;
    END;