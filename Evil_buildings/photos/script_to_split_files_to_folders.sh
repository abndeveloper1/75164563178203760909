#!/bin/sh

files_per_dir=15000

set -- photo*

n=0

for filename do
    n=$(( n + 1 ))

    N=$(( (n/files_per_dir) + 1 ))
    [ ! -d "dir_$N" ] && mkdir "dir_$N"
    mv -i -- "$filename" "dir_$N"
done
