var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n 倉儲: 41023134/cad2023 \n 網站: https://41023134.github.io/cad2023/ \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'exam', 'text': '', 'tags': '', 'url': 'exam.html'}, {'title': 'wink', 'text': 'w15_wink \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': 'wink.html'}, {'title': 'w12', 'text': '用python程式讀取 2a_w12_seat.txt 排出座位表( w12.py )： \n file_path = "2a_w12_seat.txt"\n\nwith open(file_path, "r", encoding="utf-8") as file:\n    lines = file.readlines()\n\nseat_map = {}\n\nfor line in lines:\n    elements = line.split("\\t")\n\n    if len(elements) == 2 and "(" in elements[1]:\n        stud_num = elements[0].strip()\n        seat_info = elements[1].strip()\n        seat_map[stud_num] = seat_info\n\nsorted_seats = sorted(seat_map.items(), key=lambda x: (int(x[1][1]), int(x[1][3])))\n\nmax_row = max(int(seat[1][1]) for seat in sorted_seats)\nmax_col = max(int(seat[1][3]) for seat in sorted_seats)\n\nseat_table = [["" for _ in range(max_col)] for _ in range(max_row)]\n\n# 填充座位表\nfor stud_num, seat_info in sorted_seats:\n    row = int(seat_info[1]) - 1\n    col = int(seat_info[3]) - 1\n    seat_table[row][col] = stud_num\n\n# 檢查每一排座位，補足不足的座位位置\nfor row in seat_table:\n    for i in range(9):\n        if i >= len(row) or row[i] == "":\n            row[i] = "        "\n\n# 輸出座位表\nfor row in seat_table:\n    print("\\t".join(row)) \n \n', 'tags': '', 'url': 'w12.html'}, {'title': '網路設定', 'text': '\n \n \n', 'tags': '', 'url': '網路設定.html'}, {'title': 'PMS', 'text': '有關磁力吸引的鋼球循環運動系統，電腦輔助設計與實習課程的任務一即可根據此一裝置的設計, 先採用電腦輔助設計軟體, 繪製系統所需的 3D 零組件, 然後轉為 STL 格式, import 進入 CoppeliaSim, 接著根據影片說明, 利用近接感測器控制電磁鐵開關, 設法透過磁力吸引讓鋼球具有足夠動能返回圓形平台. \n 1.完成一次返回平台(利用接近感測器感測到時，給一個力) perpetual motion simulator1_1.ttt \n 2.完成重複返回平台(利用反方向的Torque阻止重複滾動導致的加速，但球在平台上一直滾動不下來) \n perpetual motion simulator1_2.ttt \n \n 3.修改漏斗圖檔(倒角)，解決球在平台不下來的問題，調整第二感測器位置，可多次運行(非永動) \n perpetual motion simulator1_3.ttt \n \n', 'tags': '', 'url': 'PMS.html'}, {'title': 'Wink', 'text': '', 'tags': '', 'url': 'Wink.html'}, {'title': 'pms', 'text': 'Perpetual Motion Simulator繪製過程 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n', 'tags': '', 'url': 'pms.html'}, {'title': 'OBS', 'text': '', 'tags': '', 'url': 'OBS.html'}, {'title': 'solidworks', 'text': '\n \n \n', 'tags': '', 'url': 'solidworks.html'}, {'title': 'NOTE', 'text': '', 'tags': '', 'url': 'NOTE.html'}, {'title': 'Exam', 'text': '在系上 IPv6 網段時, 可以在線上考試主機  https://exam.cycu.org  帳號註冊時段 進行註冊 : \n \n 其中: \n username 請填入學號 \n email 請使用學號@nfu.edu.tw \n 選定密碼之前, 請將密碼存入個人手機的備忘錄 \n password 輸入兩次, 至少包含八個數字與英文字母的組合字串 \n name 請輸入中文姓名的名字 \n surname 請輸入中文姓名的姓 \n groups: \n 二甲: cad2023a \n \n \n', 'tags': '', 'url': 'Exam.html'}, {'title': 's1511', 'text': '如何連線s1511.cycu.org並執行動態網站? \n 1.首先要開啟cmd(小黑窗)中執行ssh cad(學號)@s1511.cycu.org \n \xa0 *若要用可攜中start.bat中的cmd要先將start.bat用編譯器打開並將第三行蓋掉,然後重新啟動。 \n 2.執行完會要你打密碼,密碼在學校Mail2000,10/28的一封s1511.cycu.org 帳號通知信裡。 \n 3.連線完會進到OpenSSH SSH client的黑窗,再來是要生成ssh的key,在黑框中執行ssh-keygen。 \n 4.接下來就是要用FileZilla連線s1511.cycu.org將.ssh目錄下的id_rsa.pub拉到本地的目錄中, \n \xa0 \xa0再用編譯器打開,並將內容送入到Github->Settings->SSH and GPG keys。 \n 5.然後下載config並用FileZilla送進.ssh目錄下 \n 6.然後在OpenSSH SSH client中執行以下三個指令: \n \xa0 \xa01.git config --global user.name "Github帳號名" \n \xa0 \xa02.git config --global user.email "Github信箱" \n \xa0 \xa03.git config --global http.proxy http://p4.cycu.org:3128 \n 7.將遠端Github的倉儲克隆下來,有以下兩種方法: \n \xa0 \xa01.http協定:git clone --recurse-submodules https://github.com/41023134/cad2023.git \n \xa0 \xa02.ssh協定:git clone --recurse-submodules git@github.com:41023134/cad2023.git \n \xa0 *由於克隆的方式不一樣倉儲中.git中的config設定也不同,因為最後是要用ssh推送到Github, \n \xa0 \xa0用https克隆的要將config設定改成ssh的樣子,也就是將 https://github.com/41023134/cad2023.git \n \xa0 \xa0改成git@github.com:41023134/cad2023.git \n 8.再來要下載server.py的檔案用編輯器將自己9開頭的埠號輸入並將檔案用FileZilla送到倉儲目錄下 \n 9.然後在小黑窗執行cd site-xxxxxxxx移動到倉儲目錄下執行python3 server.py(沒出現東西就算成功) \n 10.在firefox或waterfox中執行https:s1511.cycu.org:8xxx \n \xa0 *若有設定proxy要關掉 \n \n', 'tags': '', 'url': 's1511.html'}, {'title': 'Replit', 'text': '1.先按Create創建一個repl,然後按Import from Github導入cad2023開頭的倉儲 \n 2.導入倉儲,首先第一件要做的事是在Shell下執行git submodule update --init --recursive, \n 目的在於取下cmsite倉儲中子模組的檔案。 \n 3.然後在Shell下執行pip install flask flask_cors bs4 lxml pelican markdown gevent, \n 來安裝cmsimde需要的模組。 \n 4.切換到主函式main.py並按Run執行。 \n 5.若要推送到遠端Github,要用Version Control,打上標題然後按Commit All &Push。 \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Internet Set', 'text': '由於電腦輔助設計室某部分套件, 在 IPv4 網路環境下會被防毒軟體偵測到封包異常而封閉網路, 因此以下將 IPv4 網路關閉, 僅使用 IPv6, 並透過雙網路協定支援的代理主機設定, 以便與僅支援 IPv4 的網路主機連線. \n 利用隨身碟上的批次檔案進行電腦輔助設計室網路環境設定 ( 設定影片 ): \n 1_cadlab_network_setup.bat \n echo "disable ipv4 and setup proxy for ipv6"\nSET CurrentDir=%~dp0\n%windir%\\system32\\reg.exe import %CurrentDir%1_2023_cadlab_network_setup.reg\npowershell -executionpolicy bypass -File %CurrentDir%1_disable_ipv4.ps1\nexit \n 1_2023_cadlab_network_setup.reg \n 關閉自動搜尋代理主機, 自行設定代理主機外, 對近端與 NAT 內部 IPv4 網址不使用 proxy server, 若 proxy server 採 domain name 設定則當 IPv4 網路協定啟動時, 亦可透過代理主機連線. \n Windows Registry Editor Version 5.00\n\n [HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings]\n ; disable AutoDetect\n"AutoDetect"=dword:00000000\n"MigrateProxy"=dword:00000001\n; enable Proxy\n"ProxyEnable"=dword:00000001 \n"ProxyHttp1.1"=dword:00000000 \n"ProxyServer"="http://p4.cycu.org:3128"\n"ProxyOverride"="localhost;192.168.1.0/24;<local>" \n 1_disable_ipv4.ps1 \n 僅啟動 IPv6 網路協定, 且將 dns server 指向 hinet. \n # 關閉 IPv4 網路\nDisable-NetAdapterBinding -Name "*" -ComponentID ms_tcpip\n  \n# 啟用 IPv6 網路\nEnable-NetAdapterBinding -Name "*" -ComponentID ms_tcpip6\n  \n# 設置 IPv6 網路中的兩個 DNS 伺服器 (hinet)\n$dnsServers = "2001:b000:168::1", "2001:b000:168::2"\nSet-DnsClientServerAddress -InterfaceAlias "*" -ServerAddresses $dnsServers\n\n\n# 設定 IPv6 固定位址 (fixed address), 子網路首碼長度 (subnet prefix) 與網路預設閘道 (gateway) 等三個變數\n$ipv6Address = "2001:288:6004:17:請使用個人所分配到的 IPv6 位址"\n$subnetPrefixLength = 64\n$gateway = "2001:288:6004:17::254"\n \n# 參考 https://serverfault.com/questions/427234/getting-network-interface-device-name-in-powershell\n$query = "SELECT * FROM Win32_NetworkAdapter WHERE Manufacturer != \'Microsoft\' AND NOT PNPDeviceID LIKE \'ROOT\\\\%\'"\n$interfaces = Get-WmiObject -Query $query | Sort index\n$interfaces | ForEach{\n    $friendlyname = $_ | ForEach-Object { $_.NetConnectionID }\n    New-NetIPAddress -AddressFamily "IPv6" -InterfaceAlias $friendlyname -IPAddress $ipv6Address -PrefixLength $subnetPrefixLength -DefaultGateway $gateway\n}\n\n \n# 列出所使用的 IPv6 網路通訊協定內容\nWrite-Host "IPv6 Address: $ipv6Address/$subnetPrefixLength"\nWrite-Host "IPv6 Gateway: $gateway" \n 下載  cad2023_network_setup.7z  (需要下載密碼), 必須以管理者身分執行批次檔案, 因為要藉此身分關閉 IPv4 網路協定. \n 下載  2023_fall_w7_cadlab_network_setup.7z   (需要下載密碼), 必須先放入個人所分配到的 IPv6 位址後, 以管理者身分執行批次檔案, 就能直接完成電腦輔助設計室中電腦的網路連線設定. \n 各學員所分配的固定 IPv6 位址如下: \n 2a 學員展示用 IPv6 位址: 2001:288:6004:17:2023:cada:: 班級名單序號 \n pms <<  Previous   Next  >> exam \n', 'tags': '', 'url': 'Internet Set.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};