import styled from 'styled-components'

var trans_time = "1s";

export const MenuItemContainer = styled.div`

.menu-item {

  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
	position: relative;
	overflow: hidden;
	cursor: pointer;


	&.large{
		height: 380px;
	}

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }


	.back_img{
		position: absolute;
		width: 100%;
		height: 100%;
		background-position: center;
		background-size: cover;

		transition:         all 1 ease-in-out;
		-webkit-transition: all 1 ease-in-out;
	}

	&:hover{

		& .back_img{
			transform: scale(1.1);
		}

		& .content{
			opacity: .6;
		}
	}

  .content {
		position: relative;
		z-index: 1;
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
		background-color: rgba(250,250,250,.7);

		transition:         all $trans_time ease-in-out;
		-webkit-transition: all $trans_time ease-in-out;

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
}
`
