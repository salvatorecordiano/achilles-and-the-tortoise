# "Tic Tac Toe" Exercise

```
Workflow StartAGame/Reset =
    Outputs: (empty)Board 
```

```
Workflow PlaceAMark =
    Inputs: Mark AND Position AND Board
    Outputs: (updated)Board AND Result
```

```
Workflow Resign =
   Inputs: nothing
   Output: nothing
```

```
Result = Win OR Lose OR Draw OR Continue 
Mark = X OR O
Position = Row AND Column
Row = Top, Bottom, MiddleRow       // Row = 1..3   // no programmer jargon!
Column = Left, Right, MiddleColumn
Square = Mark OR NoMark 
Board = Set of (Position AND Square)   // unique coordinate 
```
