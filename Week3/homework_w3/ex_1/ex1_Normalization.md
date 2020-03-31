
+-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+
| member_id | member_name   | member_address | dinner_id | dinner_date | venue_code | venue_description | food_code | food_description |
+-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+
|         1 | Amit          | 325 Max park   | D00001001 | 2020-03-15  | B01        | Grand Ball Room   | C1, C2    | Curry, Cake      |
|         2 | Ben           | 24 Hudson lane | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | S1, C2    | Soup, Cake       |
|         3 | Cristina      | 516 6th Ave    | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | S1, C2    | Soup, Cake       |
|         4 | Dan           | 89 John St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1, T1, M1| Pie, Tea, Mousse |
|         5 | Ema           | 91 Pixar St    | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1, T1, M1| Pie, Tea, Mousse |
|         6 | Fatima        | 56 8th Ave     | D00001004 | 2020-03-20  | B04        | Mama's Kitchen    | F1, M1    | Falafal, Mousse  |
|         7 | Gabor         | 54 Vivaldi St  | D00001005 | 2020-02-20  | B05        | Hungry Hungary    | G1, P2    | Goulash, Pasca   |
|         8 | Hema          | 9 Peter St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1, T1, M1| Pie, Tea, Mousse |
+-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+

1- How can you convert the table into 1NF ?
   - make member_id as  PRIMARY KEY 
   - single value 
+-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+
| member_id | member_name   | member_address | dinner_id | dinner_date | venue_code | venue_description | food_code | food_description |
+-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+
|         1 | Amit          | 325 Max park   | D00001001 | 2020-03-15  | B01        | Grand Ball Room   | C1        | Curry            |
|         1 | Amit          | 325 Max park   | D00001001 | 2020-03-15  | B01        | Grand Ball Room   | C2        | Cake             |
|         2 | Ben           | 24 Hudson lane | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | S1        | Soup             |
|         2 | Ben           | 24 Hudson lane | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | C2        | Cake             |
|         3 | Cristina      | 516 6th Ave    | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | S1        | Soup             |
|         3 | Cristina      | 516 6th Ave    | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | C2        | Cake             |
|         4 | Dan           | 89 John St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1        | Pie              |
|         4 | Dan           | 89 John St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | T1        | Tea              |
|         4 | Dan           | 89 John St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | M1        | Mousse           |
|         5 | Ema           | 91 Pixar St    | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1        | Pie              |
|         5 | Ema           | 91 Pixar St    | D00001003 | 2020-03-20  | B03        | Goat Farm         | T1        | Tea              |
|         5 | Ema           | 91 Pixar St    | D00001003 | 2020-03-20  | B03        | Goat Farm         | M1        | Mousse           |
|         6 | Fatima        | 56 8th Ave     | D00001004 | 2020-03-20  | B04        | Mama's Kitchen    | F1        | Falafal          |
|         6 | Fatima        | 56 8th Ave     | D00001004 | 2020-03-20  | B04        | Mama's Kitchen    | M1        | Mousse           |
|         7 | Gabor         | 54 Vivaldi St  | D00001005 | 2020-02-20  | B05        | Hungry Hungary    | G1        | Goulash          |
|         7 | Gabor         | 54 Vivaldi St  | D00001005 | 2020-02-20  | B05        | Hungry Hungary    | P2        |  Pasca           |
|         8 | Hema          | 9 Peter St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1        | Pie              |
|         8 | Hema          | 9 Peter St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | T1        | Tea              |
|         8 | Hema          | 9 Peter St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | M1        | Mousse           |
+-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+
/------------------------------------------------/
2- What are the super, candidate, primary keys ?
 - super key are : member_name   | member_address | dinner_id | dinner_date | venue_code | venue_description | food_code |food_description       
 - candidate:  member_id  or member_address | dinner_id or member_address | venue_code
 _ primary keys are: member_id | dinner_id | venue_code
/-------------------------------------------/

3- What are the potential relationships between different possible tables ?
   
   members table  include   member_id | member_name | member_address

   restaurant  table     include   | dinner_id   | dinner_date  | venue_description |  

   order members table  include member_id | food_code
/-------------------------------------------/

4- How can you develop the set of 2NF tables?

  to create two tables A,B with primary keys 
  A - members table  include   member_id | member_name | member_address   ( PR key is member_id)
  B - item table     include    dinner_id   | dinner_date | venue_code | venue_description | food_code | food_description  ( PR key is     dinner_id  )

  
  foreign key reference from the tables to new table C
  C - order members table  include
++-----------+-----------
| member_id | dinner_id | |
+-----------+-----------+
|         1 | D00001001 | 
|         1 | D00001001 | 
|         2 | D00001002 | 
|         2 | D00001002 |  
|         3 | D00001002 | 
|         3 | D00001002 | 
|         4 | D00001003 | 
|         4 | D00001003 | 
|         4 | D00001003 | 
|         5 | D00001003 | 
|         5 | D00001003 | 
|         5 | D00001003 | 
|         6 | D00001004 | 
|         6 | D00001004 | 
|         7 | D00001005 | 
|         7 | D00001005 | 
|         8 | D00001003 | 
|         8 | D00001003 | 
|         8 | D00001003 |
+-----------+-----------+
/------------------------------------------------/

5- How can you develop the set of 3NF tables?

 create dinner table with pr key (dinner_id) and foreign key (venue_code) reference from item table 

+-----------+------------+
| dinner_id | venue_code | 
+-----------+------------+
| D00001001 | B01        | 
| D00001002 | B02        | 
| D00001003 | B03        | 
| D00001004 | B04        | 
| D00001005 | B05        | 
+-----------+------------+