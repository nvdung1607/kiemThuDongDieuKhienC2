export function danhHieu(hocLuc, hanhKiem) {
    let result = 'khongCoDanhHieu'                      //1
        if (hocLuc >= 8.0 && hanhKiem == 'tot')         //2
            result = 'hocSinhGioi'                      //3
        else if (hocLuc >= 6.5 && hanhKiem == 'tot')    //4
            result = 'hocSinhTienTien'                  //5
        else if (hocLuc >= 6.5 && hanhKiem == 'kha')    //6
            result = 'hocSinhTienTien'                  //7
        else result =  'khongCoDanhHieu'                //8
    return result                                       //9
}
