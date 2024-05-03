import calendar

print("Welcome to calendar!\n")

year = int(input('Please enter year: '))
month = int(input('Please enter a number of month: '))

print(calendar.month(year, month))

print('Bye!')