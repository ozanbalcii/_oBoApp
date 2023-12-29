import {useEffect, useState} from 'react'
import {AccountData} from '../../../simpleData/Account'
import {CurrencySort} from '../../../simpleData/CurrencySort'
import {AccountSort} from '../../../simpleData/AccountSort'
import Button from '../../../_metronic/layout/components/Shared/Button/Button'
import Table from '../../../_metronic/layout/components/Shared/Table/Table'
import Input from '../../../_metronic/layout/components/Shared/InputType/Input'
import {AccountEditButton} from './components/button/AccountEditButton'
import {AccountDetailButton} from './components/button/AccountDetailButton'
import CustomModal from '../../../_metronic/layout/components/Shared/Modal/CustomModal'
import CloseBtn from '../../../_metronic/layout/components/Shared/Modal/CloseBtn'
import AccountEditForm from './components/form/AccountEditForm'
import AccountAddForm from './components/form/AccountAddForm'

export default function Account() {
  const [addModalIsOpen, addModalSetOpen] = useState(false)
  const [editModalIsOpen, editModalSetOpen] = useState(false)
  const [isDataChange, setIsDataChange] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchValue, setSearchValue] = useState([])
  const [selectedAccountData, setSelectedAccountData] = useState({})
  const [currencyTypeOptions, setCurrencyTypeOptions] = useState([])

  const [allData, setAllData] = useState(
    AccountData.map((account) => ({
      id: account.id,
      accountSort: account.accountSort,
      accountName: account.accountName,
      currentBalance: account.currentBalance ? account.currentBalance : '11.750',
      currencySort: CurrencySort?.find((item) => item.id == account.currencySort)?.title, //! title
      fkCurrencySort: CurrencySort?.find((item) => item.id == account.currencySort)?.id, //! id
      finalTransaction: account.finalTransaction,

      accountNumber: account.accountNumber,
      openingBalance: account.openingBalance,
      bankName: account.bankName,
      branch: account.branch,
      iban: account.iban,
    }))
  )

  const fetchCurrencyTypeOptions = () => {
    setCurrencyTypeOptions([])
    const options = CurrencySort.map((item) => ({
      value: item.id,
      label: item.title,
      symbol: item.currencySymbol,
    }))
    setCurrencyTypeOptions(options)
  }

  useEffect(() => {
    fetchCurrencyTypeOptions()
  }, [])
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
    },
    {
      title: 'Hesap Tipi',
      dataIndex: 'accountSort',
    },
    {
      title: 'Hesap İsmi',
      dataIndex: 'accountName',
    },
    {
      title: 'Döviz Cinsi',
      dataIndex: 'currencySort',
    },
    {
      title: 'Güncel Bakiye',
      dataIndex: 'currentBalance',
    },
    {
      title: 'Son İşlem',
      dataIndex: 'finalTransaction',
    },
    {
      title: 'İşlemler',
      dataIndex: 'process',
      render: (item) => {
        return (
          <span className='d-flex gap-1 '>
            <AccountEditButton
              onClick={() => {
                setSelectedAccountData(item)
                editModalSetOpen(true)
              }}
              data={item}
              className='btn btn-primary btn-sm'
            />
            <AccountDetailButton id={item.id} className='btn btn-info btn-sm' />
          </span>
        )
      },
    },
  ]

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    const filteredData = allData
      .map((item) => ({nameAndSurname: item.nameAndSurname}))
      .filter((item) => item.nameAndSurname.toLowerCase().includes(searchTerm))

    setSearchValue(filteredData)
  }

  return (
    <>
      <div className='card'>
        <div className='card-header'>
          <div className='card-title'>
            <Input
              type={'text'}
              className={'form-control-solid'}
              placeholder={'Tabloda Ara...'}
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className='card-toolbar'>
            <Button
              className={'btn btn-primary btn-sm'}
              tpye={'text'}
              text={'Yeni Oluştur'}
              onClick={() => addModalSetOpen(true)}
            />
          </div>
        </div>
        <div className='card-body'>
          <Table columns={columns} data={allData} />
        </div>
      </div>

      <CustomModal
        id={'addAccountModal'}
        isOpen={addModalIsOpen}
        setOpen={addModalSetOpen}
        dialogClassName={'modal-md'}
      >
        <div className='modal-header'>
          <h2>Yeni Oluştur</h2>
          <CloseBtn setOpen={addModalSetOpen} />
        </div>
        <div className='modal-body'>
          <AccountAddForm
            setAllData={setAllData}
            setModalOpen={addModalSetOpen}
            currencyTypeOptions={currencyTypeOptions}
          />
        </div>
      </CustomModal>

      <CustomModal isOpen={editModalIsOpen} setOpen={editModalSetOpen} dialogClassName={'modal-md'}>
        <div className='modal-header'>
          <h2>Hesap Düzenle</h2>
          <CloseBtn setOpen={editModalSetOpen} />
        </div>
        <div className='modal-body'>
          <AccountEditForm
            setAllData={setAllData}
            selectedAccountData={selectedAccountData}
            setModalOpen={editModalSetOpen}
            currencyTypeOptions={currencyTypeOptions}
          />
        </div>
      </CustomModal>
    </>
  )
}
