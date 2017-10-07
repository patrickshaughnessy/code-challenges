BFS through file system and print out all file names

use of async queue for async reading of file system

Write a function to run in node as:

    $ node dump.js /temp


Dump2.js, only prints
Dump3.js, DFS with fsSync
Dump4.js, BFS with normal fs (count recursive calls)



root
|--temp
|    |-- foo
|    |    |-- a
|    |    |    +-- Hello.txt
|    |    |    +-- World.txt
|    |    |-- b
|    |    |    +-- Dude.js
|    |    |-- c
|    |    |    +-- Sweet.js
|    |    +-- hey.js
|    |-- bar
|    |    +-- baz.js
|    +-- ho.js
+-- dump.js


[
  'Users/Me/root/temp/foo/a/Hello.txt',
  'Users/Me/root/temp/foo/a/World.txt',
  'Users/Me/root/temp/foo/b/Dude.js',
  'Users/Me/root/temp/foo/c/Sweet.js',
  'Users/Me/root/temp/foo/hey.js',
  'Users/Me/root/temp/bar/baz.js',
  'Users/Me/root/temp/ho.js',
]
