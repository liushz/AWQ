import random

# 读取 text.jsonl 文件
with open('text.jsonl', 'r') as file:
    lines = file.readlines()

# 选择随机 20 行内容
random_lines = random.sample(lines, 1)

# 输出随机内容
for line in random_lines:
    print(line)
