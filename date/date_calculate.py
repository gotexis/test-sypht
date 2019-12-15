from dataclasses import dataclass


def get_max_day(year, month):

    if month in (1, 3, 5, 7, 8, 10, 12):
        max_day = 31
    elif month in (4, 6, 9, 11):
        max_day = 30
    else:
        if not year % 100:
            if not year % 400:
                max_day = 29
            else:
                max_day = 28
        elif not year % 4:
            max_day = 29
        else:
            max_day = 28
    return max_day


@dataclass
class Date:
    year: int
    month: int
    day: int

    def increment(self):

        year, month, day = self.year, self.month, self.day

        max_day = get_max_day(year, month)

        # perform the increment
        if day + 1 > max_day:
            day = 1
            if month < 12:
                month += 1
            else:
                month = 1
                year += 1
        else:
            day = day + 1

        # save
        self.year, self.month, self.day = year, month, day

    def __gt__(self, other):
        return 1000 * self.year + 50 * self.month + self.day > \
               1000 * other.year + 50 * other.month + other.day

    def validate(self):
        return all([self.month > 0, self.month <= 12, get_max_day(self.year, self.month) >= self.day])


def parse(strfdate):
    d, m, y = strfdate.split('/')
    return Date(year=int(y), month=int(m), day=int(d))


def calculate(date_from, date_to):
    date_0, date_1 = parse(date_from), parse(date_to)

    if date_0 > date_1:
        date_0, date_1 = date_1, date_0

    delta = 0

    while date_1 != date_0:
        delta += 1
        date_0.increment()
        # DEBUG
        # print(f"{date_0.year}-{date_0.month}-{date_0.day}")

    return delta - 1
