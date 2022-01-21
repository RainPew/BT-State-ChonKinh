const stateDefault = {
    mangCuoc: [
        {ma:'keo',hinhAnh:'./imgMarvel/keo.png',datCuoc:true},
        {ma:'bua',hinhAnh:'./imgMarvel/bua.png',datCuoc:false},
        {ma:'bao',hinhAnh:'./imgMarvel/bao.png',datCuoc:false},
    ],
    ketQua: 'You win',
    soBanThang:0,
    soLuotChoi:0,
    computer:{ma:'bao',hinhAnh:'./imgMarvel/bao.png'},
}

const GameOanTuXiReducer = (state = stateDefault,action) => {
    switch (action.type){
        case 'CHON_LOAI':{
            // reset mảng cược
            let mangCuocUpdate = [...state.mangCuoc];
            // tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền lên 
            mangCuocUpdate = mangCuocUpdate.map((item,index) => {
                if(item.ma === action.maCuoc){
                    return {...item,datCuoc:true}
                }
                return {...item,datCuoc:false}
            })
            // setState cua mangCuoc -> render lai UI
            state.mangCuoc = mangCuocUpdate;
            return {...state}
        }
        case 'RANDOM':{
            console.log('random',action)
            let soNgauNhien = Math.floor(Math.random() * 3);
            let cuocNgauNhien = state.mangCuoc[soNgauNhien]

            state.computer = cuocNgauNhien
            return {...state}
        }
        case 'KET_QUA':{
            state.soLuotChoi += 1;

            let player = state.mangCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch(player.ma){
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Tie!!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'You lose !!!';
                    }else{
                        state.soBanThang += 1
                        state.ketQua = 'You won!!!'
                    }
                break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'You won!!!';
                        state.soBanThang += 1;
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'Tie!!!';
                    }else{
                        state.ketQua = 'You lose!!!'
                    }
                break;
                case 'bao':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'You lose!!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'You won !!!';
                        state.soBanThang += 1;
                    }else{
                        state.ketQua = 'Tie!!!';
                    }
                break;
                default: state.ketQua = 'You won!!!';
                state.soBanThang += 1;
                return {...state}
            }
        }

        default: return {...state}
    }
}

export default GameOanTuXiReducer;
