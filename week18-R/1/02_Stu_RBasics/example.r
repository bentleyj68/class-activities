students <- c("Abraham", "Beatrice", "Cory", "Dinah", "Eric", "Felicia")

roll.call <- function(class){
  print(Sys.Date())
  for (student in class){
    print (student)
  }
}

roll.call(students)

locker.combination <- function(class){
  for (student in class){
    print(student)
    combination <- sample(33,3)
    print (combination)
  }
}

locker.combination(students)