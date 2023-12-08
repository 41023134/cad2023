file_path = "2a_w12_seat.txt"

with open(file_path, "r", encoding="utf-8") as file:
    lines = file.readlines()

seat_map = {}

for line in lines:
    elements = line.split("\t")

    if len(elements) == 2 and "(" in elements[1]:
        stud_num = elements[0].strip()
        seat_info = elements[1].strip()
        seat_map[stud_num] = seat_info

sorted_seats = sorted(seat_map.items(), key=lambda x: (int(x[1][1]), int(x[1][3])))

max_row = max(int(seat[1][1]) for seat in sorted_seats)
max_col = max(int(seat[1][3]) for seat in sorted_seats)

seat_table = [["" for _ in range(max_col)] for _ in range(max_row)]

# 填充座位表
for stud_num, seat_info in sorted_seats:
    row = int(seat_info[1]) - 1
    col = int(seat_info[3]) - 1
    seat_table[row][col] = stud_num

# 檢查每一排座位，補足不足的座位位置
for row in seat_table:
    for i in range(9):
        if i >= len(row) or row[i] == "":
            row[i] = "        "

# 輸出座位表
for row in seat_table:
    print("\t".join(row))