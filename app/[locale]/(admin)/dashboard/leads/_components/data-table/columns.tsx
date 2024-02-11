'use client'
import { formatDistanceToNow } from 'date-fns'
import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'

import { labels, priorities, statuses } from '../data/data'
import { Visitor } from '../data/schema'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'
import Link from 'next/link'

export const columns: ColumnDef<Visitor>[] = [
  /*   {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false
  }, */
  {
    accessorKey: 'company_name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Company name' />
    ),
    cell: ({ row }) => (
      <div>
        <Link href={`/dashboard/leads/${row.original.id}`}>
          {row.getValue('company_name')}
        </Link>
      </div>
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'domain',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Domain' />
    ),
    cell: ({ row }) => <div>{row.getValue('domain')}</div>,
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'visits',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Visits' />
    ),
    cell: ({ row }) => (
      <div className='flex justify-center'>{row.getValue('visits')}</div>
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'country',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Country' />
    ),
    cell: ({ row }) => <div>{row.getValue('country')}</div>,
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'industry',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Industry' />
    ),
    cell: ({ row }) => <div>{row.getValue('industry')}</div>,
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Last visit' />
    ),
    cell: ({ row }) => (
      <div>
        {formatDistanceToNow(new Date(row.getValue('updatedAt')), {
          addSuffix: true
        })}
      </div>
    ),
    enableSorting: false,
    enableHiding: false
  },
  /*   {
    accessorKey: 'domain',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Domain' />
    ),
    cell: ({ row }) => {
      const label = labels.find(label => label.value === row.original.label)

      return (
        <div className='flex space-x-2'>
          {label && <Badge variant='outline'>{label.label}</Badge>}
          <span className='max-w-[500px] truncate font-medium'>
            {row.getValue('title')}
          </span>
        </div>
      )
    }
  }, 
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        status => status.value === row.getValue('status')
      )

      if (!status) {
        return null
      }

      return (
        <div className='flex w-[100px] items-center'>
          {status.icon && (
            <status.icon className='mr-2 h-4 w-4 text-muted-foreground' />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Priority' />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        priority => priority.value === row.getValue('priority')
      )

      if (!priority) {
        return null
      }

      return (
        <div className='flex items-center'>
          {priority.icon && (
            <priority.icon className='mr-2 h-4 w-4 text-muted-foreground' />
          )}
          <span>{priority.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },
  */
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
]
