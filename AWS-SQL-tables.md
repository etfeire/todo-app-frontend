mysql> CREATE TABLE User (
    -> UserId int NOT NULL AUTO_INCREMENT,
    -> UserName varchar(255) NOT NULL, 
    -> PRIMARY KEY (UserId)
    -> );
Query OK, 0 rows affected (0.21 sec)

mysql> INSERT INTO User (UserName)
    -> VALUES (“susan@bbc.co.uk”);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '@bbc.co.uk”)' at line 2
mysql> INSERT INTO User (UserName) VALUES ("susan@bbc.co.uk");
Query OK, 1 row affected (0.13 sec)

mysql> SELECT * FROM User;
+--------+-----------------+
| UserId | UserName        |
+--------+-----------------+
|      1 | susan@bbc.co.uk |
+--------+-----------------+
1 row in set (0.02 sec)

mysql> INSERT INTO User (UserName) VALUES ("geoff@bbc.co.uk");
Query OK, 1 row affected (0.03 sec)

mysql> SELECT * FROM User;
+--------+-----------------+
| UserId | UserName        |
+--------+-----------------+
|      1 | susan@bbc.co.uk |
|      2 | geoff@bbc.co.uk |
+--------+-----------------+
2 rows in set (0.03 sec)

mysql> CREAT TABLE Task (
    -> TaskId int NOT NULL AUTO_INCREMENT,
    -> Description varchar(255) NOT NULL,
    -> Completed BOOLEAN, 
    -> UserId int,
    -> PRIMARY KEY (TaskId),
    -> FOREIGN KEY (UserId) REFERENCES User(UserId)
    -> );
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'CREAT TABLE Task (
TaskId int NOT NULL AUTO_INCREMENT,
Description varchar(255) ' at line 1
mysql> CREATE TABLE Task (
    -> ^C

^C
mysql> CREATE TABLE Task (
    -> TaskId int NOT NULL AUTO_INCREMENT,
    ->     -> Description varchar(255) NOT NULL,
    ->     -> Completed BOOLEAN, 
    ->     -> UserId int,
    ->     -> PRIMARY KEY (TaskId),
    ->     -> FOREIGN KEY (UserId) REFERENCES User(UserId)
    ->     -> );
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '-> Description varchar(255) NOT NULL,
    -> Completed BOOLEAN, 
    -> UserId i' at line 3
mysql> CREATE TABLE Task (
    -> TaskId int NOT NULL AUTO_INCREMENT,
    -> Description varchar(255) NOT NULL,
    -> Completed BOOLEAN,
    -> UserId int,
    -> PRIMARY KEY (TaskId),
    -> FOREIGN KEY (UserId) REFERENCES USER(UserId)
    -> );
ERROR 1215 (HY000): Cannot add foreign key constraint
mysql> SELECT * FROM User;
+--------+-----------------+
| UserId | UserName        |
+--------+-----------------+
|      1 | susan@bbc.co.uk |
|      2 | geoff@bbc.co.uk |
+--------+-----------------+
2 rows in set (0.02 sec)

mysql> CREATE TABLE Task (
    -> TaskId int NOT NULL AUTO_INCREMENT,
    -> Description varchar(255) NOT NULL,
    -> Completed BOOLEAN,
    -> UserId int,
    -> PRIMARY KEY (TaskId),
    -> FOREIGN KEY (UserId) REFERENCES User(UserId)
    -> );
Query OK, 0 rows affected (0.20 sec)

mysql> SELECT * FROM Task;
Empty set (0.42 sec)

mysql> INSERT INTO Task (Description, Completed, UserId) VALUES ("Learn JavaScript", false, 2);
Query OK, 1 row affected (0.02 sec)

mysql> SELECT * FROM Task;                                                      +--------+------------------+-----------+--------+
| TaskId | Description      | Completed | UserId |
+--------+------------------+-----------+--------+
|      1 | Learn JavaScript |         0 |      2 |
+--------+------------------+-----------+--------+
1 row in set (0.01 sec)

mysql> INSERT INTO Task (Description, Completed, UserId) VALUES ("Learn MySQL", false, 2);
Query OK, 1 row affected (0.10 sec)

mysql> SELECT * FROM Task;                                                      +--------+------------------+-----------+--------+
| TaskId | Description      | Completed | UserId |
+--------+------------------+-----------+--------+
|      1 | Learn JavaScript |         0 |      2 |
|      2 | Learn MySQL      |         0 |      2 |
+--------+------------------+-----------+--------+
2 rows in set (0.11 sec)

mysql> INSERT INTO Task (Description, Completed, UserId) VALUES ("Learn Node", false, 1);
Query OK, 1 row affected (0.02 sec)

mysql> SELECT * FROM Task;                                                      +--------+------------------+-----------+--------+
| TaskId | Description      | Completed | UserId |
+--------+------------------+-----------+--------+
|      1 | Learn JavaScript |         0 |      2 |
|      2 | Learn MySQL      |         0 |      2 |
|      3 | Learn Node       |         0 |      1 |
+--------+------------------+-----------+--------+
3 rows in set (0.40 sec)

mysql> SELECT * FROM Task WHERE UserId = 2;
+--------+------------------+-----------+--------+
| TaskId | Description      | Completed | UserId |
+--------+------------------+-----------+--------+
|      1 | Learn JavaScript |         0 |      2 |
|      2 | Learn MySQL      |         0 |      2 |
+--------+------------------+-----------+--------+
2 rows in set (0.02 sec)

mysql> SELECT * FROM Task WHERE UserId = 1;
+--------+-------------+-----------+--------+
| TaskId | Description | Completed | UserId |
+--------+-------------+-----------+--------+
|      3 | Learn Node  |         0 |      1 |
+--------+-------------+-----------+--------+
1 row in set (0.02 sec)

mysql> UPDATE Task SET Completed = true WHERE TaskId = 1;
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> SELECT * FROM Task WHERE UserId = 1;
+--------+-------------+-----------+--------+
| TaskId | Description | Completed | UserId |
+--------+-------------+-----------+--------+
|      3 | Learn Node  |         0 |      1 |
+--------+-------------+-----------+--------+
1 row in set (0.02 sec)

mysql> SELECT * FROM Task WHERE UserId = 2;
+--------+------------------+-----------+--------+
| TaskId | Description      | Completed | UserId |
+--------+------------------+-----------+--------+
|      1 | Learn JavaScript |         1 |      2 |
|      2 | Learn MySQL      |         0 |      2 |
+--------+------------------+-----------+--------+
2 rows in set (0.04 sec)

mysql> SELECT * FROM Task WHERE UserId = 2 Completed = false;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Completed = false' at line 1
mysql> SELECT * FROM Task WHERE UserId = 2 AND Completed = false;
+--------+-------------+-----------+--------+
| TaskId | Description | Completed | UserId |
+--------+-------------+-----------+--------+
|      2 | Learn MySQL |         0 |      2 |
+--------+-------------+-----------+--------+
1 row in set (0.02 sec)

mysql> 
