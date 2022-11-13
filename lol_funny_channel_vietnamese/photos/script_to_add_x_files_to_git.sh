#!/bin/bash

files_per_batch=300

set -- p*

n=0
N=0

for filename do
    git add $filename
    n=$(( n + 1 ))
    N=$(($n%$files_per_batch))
    if test $N -eq 0
    then
      echo "Committing"
      git commit -a -m "Done one batch"
    fi
done

git commit -a -m "Final Batch"

