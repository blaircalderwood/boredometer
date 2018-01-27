from string import ascii_lowercase
from random import randint, choice


class RandomId:

    @staticmethod
    def random_string(self, length=3):
        string = ''
        for num in range(length):
            string += choice(ascii_lowercase)

        return string

    @staticmethod
    def random_int(self, length=3):
        num_string = ''
        for num in range(length):
            num_string += str(randint(0, 9))

        return num_string

    def create(self):
        return self.random_string(3) + self.random_int(3)

    def __init__(self):
        self.data = self.random_string(3) + self.random_int(3)
