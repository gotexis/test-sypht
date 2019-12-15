import unittest
from date.date_calculate import calculate, get_max_day
from datetime import date, timedelta, datetime
import random


def random_date():
    t = datetime.fromtimestamp(0) + timedelta(
        days=random.randint(0, 99999),
    )
    return t, t.year, t.month, t.day


class DateCalculateTest(unittest.TestCase):

    def test_calculate(self):
        self.assertEqual(calculate('02/06/1983', '22/06/1983'), 19)
        self.assertEqual(calculate('4/7/1984', '25/12/1984'), 173)
        self.assertEqual(calculate('03/01/1989', '03/08/1983'), 1979)

    def test_compare_lib(self):
        """
        give a pair of random days and test
        """

        t1, y1, m1, d1 = random_date()
        t2, y2, m2, d2 = random_date()

        delta_1 = calculate(f'{d1}/{m1}/{y1}', f'{d2}/{m2}/{y2}')
        delta_2 = abs((t1 - t2).days) - 1

        self.assertEqual(delta_1, delta_2)


if __name__ == '__main__':
    unittest.main()
