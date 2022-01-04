import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
export default function MLSelectField({ onChange, menuData, value}){
   

    return (
        <div>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                Filter By
        </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={onChange}
                style={{width : '170px' , marginTop : '5%'}}
            >
                {
                    menuData.map((item)=>{
                        return (
                            <MenuItem key={`mlSelect${item}`} value={item}>{item}</MenuItem>
                        )
                    })
                }
            </Select>
        </div>
    )
}