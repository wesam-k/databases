
there is video in my channel wesam 


Database Design
1NF (4 rules)
Rule 1 : Single valued attributes (each column should have atomic value, no multiple values)
Rule 2 : Attribute domain should not change
Rule 3 : Unique names for attributes / columns
Rule 4 : Order does not matter

2NF
Table should be in the 1NF +
"no 
Role 1 : non-prime attribute : (column) that is not a part of primary key
Role 2 : should be functionally dependent 
Role 3 : on any proper subset 
Role 4 : of a candidate key"

porj_budget
proj_no => proj_budget
proj_no
emp_no  +proj_no
No partial dependency. (i.e. no field/attribute/column should depend on part of the primary/candidate key)

3NF
Table should be in 1NF and 2NF and 
No transitive dependency (i.e. no field should depend on non-key attributes)
    transitive means (Changing the non-key column Full Name may change Salutation.)

Boyce Codd Normal Form (3.5 NF)
Table should be in 1NF, 2NF, 3NF and
for any dependency A → B, A should be a super key

4NF   
No multi-value dependency
Example to explain (Super key, candidate key and primary key)
BookId, BookName, Author
Super key : set of columns that uniquely identify a row
Candidate key : minimal super key that can uniquely identify a row
Primary key : choice of candidate key chosen by database designer