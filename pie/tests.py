import unittest
from pie.progress_pie import calculate


class PieCalculateTest(unittest.TestCase):

    def test_calculate(self):
        self.assertEqual(calculate(0, 55, 55), 'white')
        self.assertEqual(calculate(12, 55, 55), 'white')
        self.assertEqual(calculate(13, 55, 55), 'black')
        self.assertEqual(calculate(99, 99, 99), 'white')
        self.assertEqual(calculate(87, 20, 40), 'black')


if __name__ == '__main__':
    unittest.main()
