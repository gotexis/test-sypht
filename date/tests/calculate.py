import unittest
from date.date_calculate import calculate


class DateCalculateTest(unittest.TestCase):

    def test_calculate(self):
        self.assertEqual(calculate('02/06/1983', '22/06/1983'), 19)
        self.assertEqual(calculate('4/7/1984', '25/12/1984'), 173)
        self.assertEqual(calculate('03/01/1989', '03/08/1983'), 1979)


if __name__ == '__main__':
    unittest.main()
