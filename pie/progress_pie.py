import math

d = 50


def calc_angle(x, y):
    angle = 0
    dy = y - 50
    dx = x - 50
    if dx == 0 and dy > 0:
        angle = 0
    if dx == 0 and dy < 0:
        angle = 180
    if dy == 0 and dx > 0:
        angle = 90
    if dy == 0 and dx < 0:
        angle = 270
    if dx > 0 and dy > 0:
        angle = math.atan(dx / dy) * 180 / math.pi
    elif dx < 0 < dy:
        angle = 360 + math.atan(dx / dy) * 180 / math.pi
    elif dx < 0 and dy < 0:
        angle = 180 + math.atan(dx / dy) * 180 / math.pi
    elif dx > 0 and dy < 0:
        angle = 180 + math.atan(dx / dy) * 180 / math.pi
    return angle


def calculate(p, x, y):
    # if distance to center is gt than round radius
    if (x - 50) ** 2 + (y - 50) ** 2 > d ** 2:
        return 'white'

    # if angle for point is gt than angle for progress
    if calc_angle(x, y) > p * 360 / 100:
        return 'white'
    return 'black'
