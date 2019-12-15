from date.date_calculate import calculate, parse


def get_date(req):
    date = input(req)

    try:
        if not parse(date).validate():
            print("Invalid date, try again")
            return get_date(req)
    except:
        print("Invalid date, try again")
        return get_date(req)

    return date


date_0 = get_date('From: ')
date_1 = get_date('To: ')

print("Result is:", calculate(date_0, date_1), 'days')
