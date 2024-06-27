# Windows Terminal 美化

对于没有安装 Windows Terminal 终端的小伙伴，可以在 Microsoft Store 中进行下载安装。<br />![Windows Terminal.gif](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308211514971.gif)

[Home | Oh My Posh](https://ohmyposh.dev/)

1. 确保 Windows 程序包管理器 `winget` 可用，如果不可用的话，可以[从 Microsoft Store 获取应用安装程序](https://www.microsoft.com/p/app-installer/9nblggh4nns1#activetab=pivot:overviewtab)；

2. 使用**管理员身份**打开 Windows Terminal 终端，选择运行 PowerShell；

3. 使用 `winget install JanDeDobbeleer.OhMyPosh -s winget` 命令安装 `oh-my-posh`；<br />![image-20230821153758290](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308211537335.png)

4. 安装 [Nerd Fonts](https://www.nerdfonts.com/) 字体，官方推荐安装 [Meslo LGM NF](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/Meslo.zip) 字体，不过可以根据自己的喜爱选择其他的字体，如 [DejaVuSansMono](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/DejaVuSansMono.zip) 字体！！！将下载好的压缩包进行解压缩，然后全部选中进行安装即可！<br />![image-20230821155225568](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308211552638.png)

5. 打开 Windows Terminal 设置，如下所示：<br />![image-20240201142944348](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402011429578.png)

6. 选中 `PowerShell`，在**外观**配置中，选择字体为 `DejaVuSansMono Nerd Font Mono`，从[Alpha Coders - Your Source For Wallpapers, Art, Photography, Gifs and More!](https://alphacoders.com/)上挑选一张自己喜欢的图片作为背景图片并且设置其不透明度为20%；效果如下所示：<br />![image-20240201151209158](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402011512329.png)

7. 重新以管理员身份打开 Windows Terminal，使 PowerShell 应用 `oh-my-posh`；

   > [!TIP]
   >
   > 如果你不知道自己目前使用的是哪个 shell，可以使用 `oh-my-posh get shell` 命令进行查看，如下所示： <br />![image-20240201151858638](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402011518817.png)

   使用 `notepad $PROFILE` 命令编辑 PowerShell 配置文件脚本，然后在配置文件中添加以下内容：`oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/amro.omp.json" | Invoke-Expression`，其中的 `amro` 为选择的主题，可以查看 [Themes | Oh My Posh](https://ohmyposh.dev/docs/themes) 总共有哪些主题，根据自己的喜爱进行更换，最后使用 `. $PROFILE` 命令使配置生效！<br />![image-20240201152722074](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402011527292.png)

   > [!WARNING]
   >
   > 当上面的命令出现**系统找不到指定的路径**错误时，请使用 `New-Item -Path $PROFILE -Type File -Force` 命令创建配置文件；
   >
   > 在这种情况下，PowerShell 也可能阻止运行本地脚本。要解决此问题，请将 PowerShell 设置为仅要求使用 `set-ExecutionPolicy-RemoteSigned` 命令对远程脚本进行签名，或对配置文件进行签名。


至此，Windows Terminal 终端使用 oh-my-posh 美化就圆满完成啦！🎉🎉🎉

